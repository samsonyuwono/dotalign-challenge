def select_all_domains
  "SELECT domain.url_text FROM domain INNER JOIN
  email_address ON domain.id === email_address.domain_id;"
end

def select_email_and_name
  "SELECT email_address.address_text, person.name FROM email_address
  INNER JOIN person ON person.id = email_address.person_id;"
end

def list_domain_and_total_number_of_emails
  "SELECT domain.url_text, SUM(participant.participant_type_id) FROM domain
  INNER JOIN email_address ON domain.id = email_address.domain_id
  INNER JOIN participant ON email_address.id = participant.email_address_id
  INNER JOIN participant_type ON participant.id = participant_type.id
  GROUP BY domain.url_text;"
end
