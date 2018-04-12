import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class CheckoutService {
  checkouts: any[] = [];
  checkoutsDB: any[] = [];

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {}

  addCheckout(checkout): void {
    let err = 0;
    this.checkouts.forEach(v => {
      if (v.id == checkout.id) {
        err++;
      }
    });
    if (err == 0) {
      this.checkouts.push(checkout);
    }
  }

  getCheckouts(): any[] {
    return this.checkouts;
  }

  setCheckouts(data: any[]): void {
    this.checkouts = data;
  }

  removeCheckout(item: any): void {
    this.checkouts.forEach((val, index) => {
      if (val.id == item.id) {
        this.checkouts.splice(index, 1);
      }
    });
  }

  saveCheckout(): Promise<any> {
    let checkoutsRef = this.db.collection('checkouts');
    if (this.checkouts.length == 0) {
      return new Promise((resolve, reject) => {
        resolve(false);
      });
    }
    return this.db.firestore.runTransaction(transaction => {
      return checkoutsRef
        .add({
          uid: this.afAuth.auth.currentUser.uid,
          createdAt: Date.now(),
          status: 0
        })
        .then(docRef => {
          return this.checkouts.forEach(item => {
            this.db.collection('transactionsCheckout').add({
              checkoutId: docRef.id,
              ...item
            });
          });
        });
    });
  }

  getCheckoutsDB(): any {
    let checkoutsREF = this.db.collection('checkouts', ref =>
      ref.where('uid', '==', this.afAuth.auth.currentUser.uid)
    );

    return checkoutsREF.snapshotChanges().map(checkout => {
      return checkout.map(cDoc => {
        let id = cDoc.payload.doc.id;
        let data = cDoc.payload.doc.data();
        let transactionsRef = this.db
          .collection('transactionsCheckout', ref =>
            ref.where('checkoutId', '==', id)
          )
          .snapshotChanges()
          .map(transactions => {
            return transactions.map(tDoc => {
              let idT = tDoc.payload.doc.id;
              let dataT = tDoc.payload.doc.data();
              return {
                id: idT,
                ...dataT
              };
            });
          });
        return {
          id,
          ...data,
          transactions: transactionsRef
        };
      });
    });
  }
}
