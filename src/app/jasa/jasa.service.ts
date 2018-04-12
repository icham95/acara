import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class JasaService {
  JASAS: Observable<any[]>;
  constructor(private db: AngularFirestore) {}

  getJASAS(): Observable<any[]> {
    let productRef = this.db.collection('products', ref =>
      ref.where('category', '==', 2)
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
