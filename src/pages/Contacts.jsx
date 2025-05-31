import { CONTACTS } from "../data";
import { Link } from "react-router";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 24px;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ContactItem = styled.div`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  transition: all 0.3s ease;

  &:hover {
    background: #eef;
  }
`

const ContactLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`

const ContactsPage = () => {
  return (
    <PageWrapper>
      <Title>Contacts Page</Title>
      <ContactList>
        {CONTACTS.map((contact) => (
          <ContactItem key={contact.id}>
            <h3>
              <ContactLink to={`${contact.id}`}>{contact.name}</ContactLink>
            </h3>
          </ContactItem>
        ))}
      </ContactList>
    </PageWrapper>
  )
}

export default ContactsPage
