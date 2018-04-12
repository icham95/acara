import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VendorService {
  constructor(private db: AngularFirestore) {}

  getVendors(): Observable<any[]> {
    let productRef = this.db.collection('products', ref =>
      ref.where('category', '==', 1)
    );
    return productRef.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
