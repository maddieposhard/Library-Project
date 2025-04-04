import { User } from '../../../src/app/shared/models/user.model';


export const userData: User[] = [
    {
        id: '01',
        username: 'mposhard',
        email: 'poshardmadeline@gmail.com',
        password: 'password123', // Insecure in real-world apps!
        ownedBooks: [
            {
                title: 'The Silent Patient',
                author: 'Alex Michaelides',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: 'A psychological thriller about a famous painter who shoots her husband and then never speaks again.',
                image: 'the-silent-patient.jpeg',
                isbn: 9781250301697
            },
            {
                title: 'The Housemaid',
                author: 'Freida McFadden',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: 'It tells the story of Millie Calloway, a young woman with a criminal past who becomes a live-in housekeeper for a wealthy family.',
                image: 'the-housemaid.jpeg',
                isbn: 9781408728512
            },
            {
                title: 'Local Woman Missing',
                author: 'Mary Kubica',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: 'A seemingly peaceful community is shaken when a local woman vanishes, and years later, her young daughter suddenly reappears, unraveling a web of long-buried secrets.',
                image: 'local-woman-missing.jpg',
                isbn: 9780778311430
            }
        ],
        borrowedBooks: []
    },
    {
        id: '02',
        username: 'dyang',
        email: 'derekyiyang@gmail.com',
        password: 'password456',
        ownedBooks: [
            {
                title: 'None of This is True',
                author: 'Lisa Jewell',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: 'A psychological thriller about a woman, Josie Fair, who finds herself the subject of a popular true crime podcast hosted by Alix Summer, and the story explores secrets, lies, and the complexities of their intertwined lives.',
                image: 'none-of-this-is-true.jpeg',
                isbn: 9781420514063
            },
            {
                title: 'Stay True',
                author: 'Hua Hsu',
                genre: ['Biography', 'True Crime', 'Non-Fiction', 'Memoir'],
                description: "A coming-of-age story exploring themes of friendship, grief, self-discovery, and the search for meaning, centered around Hsu's relationship with his college friend, Ken, who is tragically killed in a carjacking.",
                image: 'stay-true.jpeg',
                isbn: 9780593315200
            },
            {
                title: 'A Walk in the Woods',
                author: 'Bill Bryson',
                genre: ['Travel', 'Non-Fiction', 'Humor', 'Memoir'],
                description: '1998 travel book by the writer Bill Bryson, chronicling his attempt to thru-hike the Appalachian Trail during the spring and summer of 1996.',
                image: 'a-walk-in-the-woods.jpeg',
                isbn: 9780552997027
            }
        ],
        borrowedBooks: [
        ]
    },
    {
        id: '03',
        username: 'mmaster',
        email: 'meaganmaster@gmail.com',
        password: 'password789',
        ownedBooks: [
            {
                title: 'Me Talk Pretty One Day',
                author: 'David Sedaris',
                genre: ['Memoir', 'Humor' , 'Non-Fiction'],
                description: 'A collection of essays by David Sedaris that humorously explores his experiences growing up in a large Greek family, coming to terms with his sexuality, and moving to France.',
                image: 'me-talk-pretty-one-day.jpeg',
                isbn: 9780316776967
            },
            {
                title: 'A Little Life',
                author: 'Hanya Yanagihara',
                genre: ['Fiction'],
                description: "A novel that follows the complex and enduring friendship of four young men, Jude, Willem, Malcolm, and JB, as they navigate their careers, relationships, and the aftermath of Jude's traumatic childhood, spanning several decades.",
                image: 'a-little-life.jpeg',
                isbn: 9781447294832
            },
            {
                title: 'The Inmate',
                author: 'Frieda McFadden',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: 'A psychological thriller where a nurse practitioner, Brooke Sullivan, discovers her high school sweetheart, Shane Nelson, is an inmate in the maximum-security prison where she works, a man serving a life sentence for a series of grisly murders.',
                image: 'the-inmate.jpeg',
                isbn: 9781087905716
            }
           
        ],
        borrowedBooks: [
        ]
    }
];

