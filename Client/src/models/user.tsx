import Dexie from 'dexie'

export class MyAppDatabase extends Dexie{
  users!: Dexie.Table<user, number>
  constructor () {
    super("MyAppDatabase");
    this.version(1).stores({

        users: '++id, name, email',
        
    });
}
}
interface user {
   id?:number, 
   name:string,
   email:string,
} 