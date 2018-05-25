"lists of each domain in the system"
  SELECT domain.url_text FROM domain INNER JOIN
  email_address ON domain.id = email_address.domain_id;

"lists of each email along with owner's real name"
SELECT email_address.address_text, person.name FROM email_address
  INNER JOIN person ON person.id = email_address.person_id;

"lists each domain and the total number of emails sent to it(combining To, CC, and BCC)"
  SELECT domain.url_text, SUM(participant.participant_type_id) FROM domain
  JOIN email_address ON domain.id = email_address.domain_id
  JOIN participant ON email_address.id = participant.email_address_id
  JOIN participant_type ON participant.id = participant_type.id
  GROUP BY domain.url_text;
