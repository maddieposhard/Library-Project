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
            },
            {
                title: 'Little Fires Everywhere',
                author: 'Celeste Ng',
                genre: ['Mystery', 'Fiction'],
                description: 'In Shaker Heights, Ohio, a seemingly perfect suburb, the lives of two families become intertwined when a mysterious artist and her daughter move in, leading to a series of events that reveal deep-seated secrets and tensions.',
                image: 'https://m.media-amazon.com/images/I/81ccchV7FML.jpg',
                isbn: 9780143135166
            },
            {
                title: 'Look Closer',
                author: 'David Ellis',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: "Shannon and Vicky couldn't seem more normal: a wealthy Chicago couple with a stable, if unexciting, marriage. But with these two...absolutely nothing is what it seems. When a beautiful socialite is found hanging in a mansion in a nearby suburb, Simon and Vicky's complex web of secrets begins to unravel.",
                image: 'https://m.media-amazon.com/images/I/818mi4ALj3L.jpg',
                isbn: 9780425280867
            },
            {
                title: 'The Night She Disappeared',
                author: 'Lisa Jewell',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: "Gabie, a delivery girl at Pete's Pizza, becomes obsessed with finding her missing co-worker, Kayla, after learning the supposed kidnapper targeted a girl driving a Mini Cooper, just like Gabie. She, along with fellow employee Drew, sets out to prove Kayla is alive and to find her before it's too late, leading them on a suspenseful quest.",
                image: 'https://m.media-amazon.com/images/I/818Fg3epKfL._AC_UF1000,1000_QL80_.jpg',
                isbn: 9781982137373
            },
            {
                title: 'Midnight in the Garden of Good and Evil',
                author: 'John Berendt',
                genre: ['Non-Fiction', 'True Crime', 'Biography'],
                description: "The story follows Berendt's experiences living in Savannah and his interactions with a cast of memorable characters, including wealthy antiques dealer Jim Williams, who is accused of shooting his employee, Danny Hansford, in 1981. The book delves into the city's social scene, its history, and the legal drama surrounding the trial, painting a portrait of a city where the lines between good and evil are blurred.",
                image: 'https://m.media-amazon.com/images/I/91U0ePVnodL.jpg',
                isbn: 679429220
            },
            {
                title: 'Pretty Girls',
                author: 'Karin Slaughter',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: "The story revolves around estranged sisters Claire and Lydia. They are brought together by a shared tragedy, a murder, that forces them to confront a long-buried mystery surrounding their sister Julia's disappearance decades prior. As they delve into the past, they uncover family secrets that could lead to redemption or revenge.",
                image: 'https://m.media-amazon.com/images/I/81bG7MaEZWL._AC_UF1000,1000_QL80_.jpg',
                isbn: 9780062499554
            },
            {
                title: 'The Perfect Son',
                author: 'Freida McFadden',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: "Erika Cass has a perfect family and a perfect life. Until the evening when two detectives show up at her front door. A high school girl has vanished from Erika's quiet suburban neighborhood. The police suspect the worst--murder. And Erika's teenage son, Liam, was the last person to see the girl alive.",
                image: 'https://m.media-amazon.com/images/I/812qqCIwnXL._UF1000,1000_QL80_.jpg',
                isbn: 9798635011362
            },
            {
                title: 'Never Lie',
                author: 'Freida McFadden',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: " The storytells follows newlyweds Tricia and Ethan who become trapped in a remote house owned by a renowned psychiatrist, Dr. Adrienne Hale, during a snowstorm. While exploring the house, Tricia discovers Dr. Hale's old patient transcripts, uncovering dark secrets and a web of lies that blur the lines between truth and deception.",
                image: 'https://m.media-amazon.com/images/I/8196x-1wIOL._UF1000,1000_QL80_.jpg',
                isbn: 9781728296166
            },
            {
                title: 'Tell No One',
                author: 'Harlan Coben',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: "The story follows Dr. David Beck as he grapples with the eight-year-old murder of his wife, Elizabeth. A cryptic email, containing a phrase only they would know, leads him to believe she might still be alive. He's warned to keep this discovery secret, but he can't help but investigate, putting himself and everyone he cares about in danger.",
                image: 'https://m.media-amazon.com/images/I/81ynRzDfWyL.jpg',
                isbn: 9780593355862
            },
            {
                title: 'Normal People',
                author: 'Sally Rooney',
                genre: ['Fiction'],
                description: "The story follows Marianne Sheridan and Connell Waldron, who are drawn to each other despite their contrasting social backgrounds and personalities. The novel explores their evolving relationship through their secondary school years and into their university lives, highlighting their intellectual connection and the complexities of their shared experiences",
                image: 'https://m.media-amazon.com/images/I/81kT0cJ+xQL.jpg',
                isbn: 9780593168202
            },
            {
                title: 'Bossypants',
                author: 'Tina Fey',
                genre: ['Memoir', 'Humor', 'Non-Fiction'],
                description: "A memoir that chronicles Tina Fey's upbringing, career path, and reflections on her personal and professional journey.",
                image: 'https://m.media-amazon.com/images/I/81wOflATS3L.jpg',
                isbn: 9780316056892
            },
            {
                title: 'Devil in the White City',
                author: 'Erik Larson',
                genre: ['True Crime', 'Biography', 'Non-Fiction'],
                description: "The book interweaves the true stories of Daniel Burnham, architect of the 1893 Chicago World's Fair (also known as the World's Columbian Exposition), and H.H. Holmes, a serial killer who operated a murder castle near the fairgrounds.",
                image: 'https://m.media-amazon.com/images/I/91NrJMBpqcL.jpg',
                isbn: 9780375725609
            },
            {
                title: 'Dress Your Family in Corduroy and Denim',
                author: 'David Sedaris',
                genre: ['Memoir', 'Non-Fiction'],
                description: "A collection of autobiographical essays by David Sedaris, primarily focusing on his eccentric family in North Carolina. The essays explore his early childhood, highlighting the quirky personalities and seemingly mundane situations of his family and neighbors.",
                image: 'https://m.media-amazon.com/images/I/61Eu-rsa8GL._AC_UF1000,1000_QL80_.jpg',
                isbn: 9780316143462
            },
        
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
            },
            {
                title: 'Rock Paper Scissors',
                author: 'Alice Feeny',
                genre: ['Thriller', 'Mystery', 'Fiction'],
                description: "The story follows Adam and Amelia Wright, a couple on the brink, who take a weekend getaway to the Scottish Highlands. Adam suffers from face blindness, and the couple has secrets, as revealed through annual anniversary letters Amelia writes and hides. Their trip to a potentially haunted chapel becomes increasingly unsettling, as they are not alone and the truth behind their relationship is revealed",
                image: 'https://m.media-amazon.com/images/I/91CktmxU6dL.jpg',
                isbn: 1250266106
            },
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

