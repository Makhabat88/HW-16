import React from 'react'
import { CONTACTS } from '../data'
import { useParams } from 'react-router'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 24px;
`

const ContactCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #f9f9f9;
  max-width: 400px;
`

const ContactName = styled.h3`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 12px;
`

const ContactPhone = styled.h4`
  font-size: 20px;
  color: #555;
`

const SingleContact = () => {
  const params = useParams()
  const contact = CONTACTS.find((contact) => contact.id === params.contactId)

  if (!contact) {
    return <PageWrapper><h2>Contact not found.</h2></PageWrapper>
  }

  return (
    <PageWrapper>
      <Title>Single Contact</Title>
      <ContactCard>
        <ContactName>{contact.name}</ContactName>
        <ContactPhone>{contact.phone}</ContactPhone>
      </ContactCard>
    </PageWrapper>
  )
}

export default SingleContact
