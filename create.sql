CREATE TABLE message (
  id INTEGER PRIMARY KEY,
    subject TEXT,
    message_text INTEGER
);

CREATE TABLE participant_type (
  id INTEGER PRIMARY KEY,
    type TEXT
);

CREATE TABLE participant (
  id INTEGER PRIMARY KEY,
    participant_type_id INTEGER,
    email_address_id INTEGER,
    message_id INTEGER
);

CREATE TABLE person (
  id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE email_address (
  id INTEGER PRIMARY KEY,
    address_text TEXT,
    domain_id INTEGER,
    person_id INTEGER
);

CREATE TABLE domain (
  id INTEGER PRIMARY KEY,
    url_text TEXT
);
