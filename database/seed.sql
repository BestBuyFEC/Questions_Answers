TRUNCATE users RESTART IDENTITY CASCADE;
TRUNCATE questions RESTART IDENTITY CASCADE;
TRUNCATE answers RESTART IDENTITY CASCADE;

INSERT INTO users(username) VALUES ('Jim');
INSERT INTO users(username) VALUES ('Jimothy');
INSERT INTO users(username) VALUES ('LEGO Customer Service');
INSERT INTO questions(question, userID) VALUES ('What games come with it, and are you able to buy mario kart? to play with it..', 1);
INSERT INTO questions(question, userID) VALUES ('Do you sell this without the little tv monitor?', 2);
INSERT INTO answers(answer, userID, question_id) VALUES ('Hi there! This is not an actual game console - its a LEGO® model of the nostalgic Nintendo Entertainment System™! The buildable TV alongside the NES model make a cool display item for your home or office.', 3, 1);
INSERT INTO answers(answer, userID, question_id) VALUES ('Just want to make sure you realize that this is not real NES; it is a Lego set. With that said, it builds into the TV and the NES.', 3, 2);