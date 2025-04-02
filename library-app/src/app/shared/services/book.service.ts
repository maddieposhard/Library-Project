import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private books = signal<Book[]>([
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: ['Thriller, Crime, Fiction'],
    description: 'A psychological thriller about a famous painter who shoots her husband and then never speaks again.'
},
{
    title: 'The Housemaid',
    author: 'Freida McFadden',
    genre: ['Thriller, Crime, Fiction'],
    description: 'It tells the story of Millie Calloway, a young woman with a criminal past who becomes a live-in housekeeper for a wealthy family.'
},
{
    title: 'Local Woman Missing',
    author: 'Mary Kubica',
    genre: ['Thriller, Crime, Fiction'],
    description: 'A seemingly peaceful community is shaken when a local woman vanishes, and years later, her young daughter suddenly reappears, unraveling a web of long-buried secrets.' 
}
]);

getBooks () {
  return this.books.asReadonly()
}
}
