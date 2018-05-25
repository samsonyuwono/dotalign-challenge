INSERT INTO message (subject, message_text)
VALUES("A once in a lifetime chance", "To whom it may concern"),
("Demo follow up", "Dear sir or madam,...");

INSERT INTO participant_type (type)
VALUES("From"), ("To"), ("CC"), ("BCC");

INSERT INTO participant (participant_type_id, email_address_id, message_id)
VALUES(1, 1, 1), (2, 2, 1), (2, 3, 1), (1, 2, 2), (2, 3, 2),
(3, 4, 2);

INSERT INTO person (name)
VALUES("John Doe"), ("Janet Smith"), ("Robert Strong"), ("Susan Jones");

INSERT INTO email_address (address_text, domain_id, person_id)
VALUES("John.Doe@gmail.com", 1, 1), ("john@ValiCorp.com", 2, 1),
("jsmith@FWork.com", 3, 2), ("rstrong@FWork.com", 3, 3),
("daisies@gmail.com", 1, 3), ("susan@ValiCorp.com", 2, 4);

INSERT INTO domain (url_text)
VALUES("gmail.com"), ("ValiCorp.com"), ("FWork.com");
