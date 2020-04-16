import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
  currProject: Project;
  currUserProjects: Array<Project> = [];
  thisUser: User;

  currMembers: any[];
  messagesLimit = 20;
  inProjectPage = false;
  alreadySeen: User[] = [];
  inChatPage = false;
  
  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User) {
    return this.firestore.collection('users').add(user);
  }

  getProjects() {
    return this.firestore.collection('projects').ref;
  }

  getChatDetails(projectname: string) {
    let chatRef = this.firestore.collection<any>(projectname, ref => ref.orderBy('created_at','desc'));
    return chatRef.snapshotChanges()
  }

  createProject(project: Project) {
    return this.firestore.collection('projects').add({ ...project });
  }

  updateLoginStatus(user: string, status: string) {
    
      console.log(user);
      this.firestore.collection(user).doc(user).set({
        user: user,
        status: status
      });
  }
}
