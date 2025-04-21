import { User } from '../../../src/app/shared/models/user.model';

export const userData: User[] = [
  {
    id: '01',
    username: 'mposhard',
    email: 'poshardmadeline@gmail.com',
    password: 'password123', 
    ownedBooks: [
      {
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          'A psychological thriller about a famous painter who shoots her husband and then never speaks again.',
        image: 'the-silent-patient.jpeg',
        isbn: 9781250301697,
      },
      {
        title: 'The Housemaid',
        author: 'Freida McFadden',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          'It tells the story of Millie Calloway, a young woman with a criminal past who becomes a live-in housekeeper for a wealthy family.',
        image: 'the-housemaid.jpeg',
        isbn: 9781408728512,
      },
      {
        title: 'Local Woman Missing',
        author: 'Mary Kubica',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          'A seemingly peaceful community is shaken when a local woman vanishes, and years later, her young daughter suddenly reappears, unraveling a web of long-buried secrets.',
        image: 'local-woman-missing.jpg',
        isbn: 9780778311430,
      },
      {
        title: 'Little Fires Everywhere',
        author: 'Celeste Ng',
        genre: ['Mystery', 'Fiction'],
        description:
          'In Shaker Heights, Ohio, a seemingly perfect suburb, the lives of two families become intertwined when a mysterious artist and her daughter move in, leading to a series of events that reveal deep-seated secrets and tensions.',
        image: 'https://m.media-amazon.com/images/I/81ccchV7FML.jpg',
        isbn: 9780143135166,
      },
      {
        title: 'Look Closer',
        author: 'David Ellis',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          "Shannon and Vicky couldn't seem more normal: a wealthy Chicago couple with a stable, if unexciting, marriage. But with these two...absolutely nothing is what it seems. When a beautiful socialite is found hanging in a mansion in a nearby suburb, Simon and Vicky's complex web of secrets begins to unravel.",
        image: 'https://m.media-amazon.com/images/I/818mi4ALj3L.jpg',
        isbn: 9780425280867,
      },
      {
        title: 'The Night She Disappeared',
        author: 'Lisa Jewell',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          "Gabie, a delivery girl at Pete's Pizza, becomes obsessed with finding her missing co-worker, Kayla, after learning the supposed kidnapper targeted a girl driving a Mini Cooper, just like Gabie. She, along with fellow employee Drew, sets out to prove Kayla is alive and to find her before it's too late, leading them on a suspenseful quest.",
        image:
          'https://m.media-amazon.com/images/I/818Fg3epKfL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9781982137373,
      },
      {
        title: 'Midnight in the Garden of Good and Evil',
        author: 'John Berendt',
        genre: ['Non-Fiction', 'True Crime', 'Biography', 'Historical'],
        description:
          "The story follows Berendt's experiences living in Savannah and his interactions with a cast of memorable characters, including wealthy antiques dealer Jim Williams, who is accused of shooting his employee, Danny Hansford, in 1981. The book delves into the city's social scene, its history, and the legal drama surrounding the trial, painting a portrait of a city where the lines between good and evil are blurred.",
        image: 'https://m.media-amazon.com/images/I/91U0ePVnodL.jpg',
        isbn: 679429220,
      },
      {
        title: 'Pretty Girls',
        author: 'Karin Slaughter',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          "The story revolves around estranged sisters Claire and Lydia. They are brought together by a shared tragedy, a murder, that forces them to confront a long-buried mystery surrounding their sister Julia's disappearance decades prior. As they delve into the past, they uncover family secrets that could lead to redemption or revenge.",
        image:
          'https://m.media-amazon.com/images/I/81bG7MaEZWL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9780062499554,
      },
      {
        title: 'The Perfect Son',
        author: 'Freida McFadden',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          "Erika Cass has a perfect family and a perfect life. Until the evening when two detectives show up at her front door. A high school girl has vanished from Erika's quiet suburban neighborhood. The police suspect the worst--murder. And Erika's teenage son, Liam, was the last person to see the girl alive.",
        image:
          'https://m.media-amazon.com/images/I/812qqCIwnXL._UF1000,1000_QL80_.jpg',
        isbn: 9798635011362,
      },
      {
        title: 'Never Lie',
        author: 'Freida McFadden',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          " The storytells follows newlyweds Tricia and Ethan who become trapped in a remote house owned by a renowned psychiatrist, Dr. Adrienne Hale, during a snowstorm. While exploring the house, Tricia discovers Dr. Hale's old patient transcripts, uncovering dark secrets and a web of lies that blur the lines between truth and deception.",
        image:
          'https://m.media-amazon.com/images/I/8196x-1wIOL._UF1000,1000_QL80_.jpg',
        isbn: 9781728296166,
      },
      {
        title: 'Tell No One',
        author: 'Harlan Coben',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          "The story follows Dr. David Beck as he grapples with the eight-year-old murder of his wife, Elizabeth. A cryptic email, containing a phrase only they would know, leads him to believe she might still be alive. He's warned to keep this discovery secret, but he can't help but investigate, putting himself and everyone he cares about in danger.",
        image: 'https://m.media-amazon.com/images/I/81ynRzDfWyL.jpg',
        isbn: 9780593355862,
      },
      {
        title: 'Normal People',
        author: 'Sally Rooney',
        genre: ['Fiction'],
        description:
          'The story follows Marianne Sheridan and Connell Waldron, who are drawn to each other despite their contrasting social backgrounds and personalities. The novel explores their evolving relationship through their secondary school years and into their university lives, highlighting their intellectual connection and the complexities of their shared experiences',
        image: 'https://m.media-amazon.com/images/I/81kT0cJ+xQL.jpg',
        isbn: 9780593168202,
      },
      {
        title: 'Bossypants',
        author: 'Tina Fey',
        genre: ['Memoir', 'Humor', 'Non-Fiction'],
        description:
          "A memoir that chronicles Tina Fey's upbringing, career path, and reflections on her personal and professional journey.",
        image: 'https://m.media-amazon.com/images/I/81wOflATS3L.jpg',
        isbn: 9780316056892,
      },
      {
        title: 'Devil in the White City',
        author: 'Erik Larson',
        genre: ['True Crime', 'Biography', 'Non-Fiction', 'Historical'],
        description:
          "The book interweaves the true stories of Daniel Burnham, architect of the 1893 Chicago World's Fair (also known as the World's Columbian Exposition), and H.H. Holmes, a serial killer who operated a murder castle near the fairgrounds.",
        image: 'https://m.media-amazon.com/images/I/91NrJMBpqcL.jpg',
        isbn: 9780375725609,
      },
      {
        title: 'Dress Your Family in Corduroy and Denim',
        author: 'David Sedaris',
        genre: ['Memoir', 'Non-Fiction'],
        description:
          'A collection of autobiographical essays by David Sedaris, primarily focusing on his eccentric family in North Carolina. The essays explore his early childhood, highlighting the quirky personalities and seemingly mundane situations of his family and neighbors.',
        image:
          'https://m.media-amazon.com/images/I/61Eu-rsa8GL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9780316143462,
      },
    ],
    borrowedBooks: [
      {
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        genre: ['Memoir', 'Humor', 'Non-Fiction'],
        description:
          'A collection of essays by David Sedaris that humorously explores his experiences growing up in a large Greek family, coming to terms with his sexuality, and moving to France.',
        image: 'me-talk-pretty-one-day.jpeg',
        isbn: 9780316776967,
      },
    ],
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
        description:
          'A psychological thriller about a woman, Josie Fair, who finds herself the subject of a popular true crime podcast hosted by Alix Summer, and the story explores secrets, lies, and the complexities of their intertwined lives.',
        image: 'none-of-this-is-true.jpeg',
        isbn: 9781420514063,
      },
      {
        title: 'Stay True',
        author: 'Hua Hsu',
        genre: ['Biography', 'True Crime', 'Non-Fiction', 'Memoir'],
        description:
          "A coming-of-age story exploring themes of friendship, grief, self-discovery, and the search for meaning, centered around Hsu's relationship with his college friend, Ken, who is tragically killed in a carjacking.",
        image: 'stay-true.jpeg',
        isbn: 9780593315200,
      },
      {
        title: 'A Walk in the Woods',
        author: 'Bill Bryson',
        genre: ['Travel', 'Non-Fiction', 'Humor', 'Memoir'],
        description:
          '1998 travel book by the writer Bill Bryson, chronicling his attempt to thru-hike the Appalachian Trail during the spring and summer of 1996.',
        image: 'a-walk-in-the-woods.jpeg',
        isbn: 9780552997027,
      },
      {
        title: 'Rock Paper Scissors',
        author: 'Alice Feeny',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          'The story follows Adam and Amelia Wright, a couple on the brink, who take a weekend getaway to the Scottish Highlands. Adam suffers from face blindness, and the couple has secrets, as revealed through annual anniversary letters Amelia writes and hides. Their trip to a potentially haunted chapel becomes increasingly unsettling, as they are not alone and the truth behind their relationship is revealed',
        image: 'https://m.media-amazon.com/images/I/91CktmxU6dL.jpg',
        isbn: 1250266106,
      },
      {
        title: 'Abundance',
        author: 'Ezra Klein & David Brooks',
        genre: ['Non-Fiction', 'Political Science'],
        description:
          'The book examines the reasons behind the lack of progress on ambitious projects in the United States, including those related to affordable housing, infrastructure, and climate change.',
        image:
          'https://m.media-amazon.com/images/I/71dn+hvNIOL._AC_UF1000,1000_QL80_.jpg',
        isbn: 1668023482,
      },
      {
        title: 'Lethal Prey',
        author: 'John Sandford',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          "Lucas Davenport and Virgil Flowers team up to investigate the murder of Doris Grandfelt, an employee at an accounting firm, whose death was never solved twenty years prior. Doris's sister, Lara, is diagnosed with breast cancer and determined to find her sister's killer before she dies. The case becomes more complex as the investigation uncovers a ruthless killer determined to keep the past buried.",
        image: 'https://m.media-amazon.com/images/I/81wxTeDc7fL.jpg',
        isbn: 9798217067435,
      },
      {
        title: 'The Nightingale',
        author: 'Kristin Hannah',
        genre: ['Historical', 'Fiction'],
        description:
          'The book follows two sisters, Vianne and Isabelle, as they navigate life during World War II in German-occupied France. Vianne, the older sister, lives in Carriveau with her husband and daughter, while Isabelle, the younger sister, is more rebellious and eventually joins the French resistance..',
        image:
          'https://m.media-amazon.com/images/I/914dNZ+lLjL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9780312577223,
      },
      {
        title: 'The Paper Palace',
        author: 'Miranda Cowley Heller',
        genre: ['Fiction', 'Romance'],
        description:
          'Set over a single day at a summer retreat on Cape Cod, the story unfolds as Elle Bishop must choose between the life she built with her husband and the passionate past she shares with her childhood love.',
        image: 'https://m.media-amazon.com/images/I/81SQzl3VqcL.jpg',
        isbn: 9780593329825,
      },
      {
        title: 'Mexican Gothic',
        author: 'Silvia Moreno-Garcia',
        genre: ['Horror', 'Historical', 'Fiction'],
        description:
          "In 1950s Mexico, glamorous socialite Noemí Taboada is summoned to a remote mansion where her cousin believes she's being poisoned. What she finds is a terrifying house full of secrets and something far more sinister beneath the surface.",
        image: 'https://m.media-amazon.com/images/I/81Q9jM2ASmL.jpg',
        isbn: 9780525620785,
      },
      {
        title: 'The Henna Artist',
        author: 'Alka Joshi',
        genre: ['Historical', 'Fiction'],
        description:
          'In 1950s Jaipur, Lakshmi escapes an abusive marriage and becomes the most sought-after henna artist to the rich. Her carefully constructed life is disrupted when her estranged husband appears with a sister she never knew she had.',
        image:
          'https://m.media-amazon.com/images/I/81D40vFCMzS._AC_UF1000,1000_QL80_.jpg',
        isbn: 9780778331476,
      },
      {
        title: 'The Paris Library',
        author: 'Janet Skeslien Charles',
        genre: ['Historical', 'Fiction'],
        description:
          'Based on the true story of the American Library in Paris during WWII, this novel follows Odile, a librarian who joins the resistance. Decades later, her story is uncovered by a lonely teenager in Montana, connecting them in unexpected ways.',
        image: 'https://m.media-amazon.com/images/I/81X7LNB7rBS.jpg',
        isbn: 9781982134198,
      },
    ],
    borrowedBooks: [],
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
        genre: ['Memoir', 'Humor', 'Non-Fiction'],
        description:
          'A collection of essays by David Sedaris that humorously explores his experiences growing up in a large Greek family, coming to terms with his sexuality, and moving to France.',
        image: 'me-talk-pretty-one-day.jpeg',
        isbn: 9780316776967,
      },
      {
        title: 'A Little Life',
        author: 'Hanya Yanagihara',
        genre: ['Fiction'],
        description:
          "A novel that follows the complex and enduring friendship of four young men, Jude, Willem, Malcolm, and JB, as they navigate their careers, relationships, and the aftermath of Jude's traumatic childhood, spanning several decades.",
        image: 'a-little-life.jpeg',
        isbn: 9781447294832,
      },
      {
        title: 'The Inmate',
        author: 'Frieda McFadden',
        genre: ['Thriller', 'Mystery', 'Fiction'],
        description:
          'A psychological thriller where a nurse practitioner, Brooke Sullivan, discovers her high school sweetheart, Shane Nelson, is an inmate in the maximum-security prison where she works, a man serving a life sentence for a series of grisly murders.',
        image: 'the-inmate.jpeg',
        isbn: 9781087905716,
      },
      {
        title: 'Verity',
        author: 'Colleen Hoover',
        genre: ['Romance', 'Thriller', 'Fiction'],
        description:
          "Struggling writer Lowen Ashleigh is hired to complete the remaining books in a successful series by the incapacitated Verity Crawford, whose husband, Jeremy, is also the series' subject. While sorting through Verity's belongings, Lowen stumbles upon an unfinished autobiography revealing dark secrets about Verity's life, including her jealousy and obsession with Jeremy and her involvement in their daughters' deaths. Torn between her growing feelings for Jeremy and the revelations in the manuscript, Lowen must decide whether to expose Verity's truth and the potential devastation it could bring to Jeremy.",
        image:
          'https://m.media-amazon.com/images/I/917iVfhEhxL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9781538724736,
      },
      {
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        genre: ['Mystery', 'Fiction'],
        description:
          "Set in the marshes of North Carolina, the story follows Kya Clark, the 'Marsh Girl', who grows up in isolation. When a local man is found dead, suspicion falls on her as the secrets of her past begin to unravel.",
        image:
          'https://m.media-amazon.com/images/I/81SjX1vUR4L._UF1000,1000_QL80_.jpg',
        isbn: 9780735219106,
      },
      {
        title: 'Circe',
        author: 'Madeline Miller',
        genre: ['Fantasy', 'Mythology', 'Fiction'],
        description:
          'A reimagining of the story of Circe, daughter of the sun god Helios, who is banished to a deserted island. There, she hones her powers and crosses paths with some of the most famous figures in Greek mythology.',
        image:
          'https://m.media-amazon.com/images/I/91c0yRVm+0L._UF1000,1000_QL80_.jpg',
        isbn: 9780316556323,
      },
      {
        title: 'Educated',
        author: 'Tara Westover',
        genre: ['Memoir', 'Biography', 'Non-Fiction'],
        description:
          'Tara Westover recounts her journey from growing up in a survivalist family in rural Idaho—with no formal education—to earning a PhD from Cambridge University. A story of resilience, self-discovery, and the transformative power of learning.',
        image:
          'https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9780399590504,
      },
      {
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: ['Fantasy', 'Fiction'],
        description:
          "Between life and death, there's a library where every book represents a different life you could have lived. Nora Seed finds herself in this library and explores the infinite choices that could've changed her story.",
        image:
          'https://m.media-amazon.com/images/I/71ls-I6A5KL._AC_UF1000,1000_QL80_.jpg',
        isbn: 9780525559474,
      },
      {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        genre: ['Science Fiction', 'Thriller'],
        description:
          'Ryland Grace wakes up alone on a spaceship with no memory and a mission to save humanity. As his memory returns, he realizes the scale of the task—and the alien alliance he must form to succeed.',
        image:
          'https://upload.wikimedia.org/wikipedia/en/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg',
        isbn: 9780593135204,
      },
    ],
    borrowedBooks: [],
  },
];
