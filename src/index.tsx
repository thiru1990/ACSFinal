// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // this should point to your App.tsx file
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {
  CallAndChatLocator,
  CallWithChatComposite,
  useAzureCommunicationCallWithChatAdapter,
  CallWithChatCompositeOptions
} from '@azure/communication-react';
import {
  CallComposite,
  ChatComposite,
  fromFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter,
  useAzureCommunicationChatAdapter
} from '@azure/communication-react';
import { TeamsMeetingLinkLocator } from '@azure/communication-calling';

export const getTeamsLinkFromUrl = (): TeamsMeetingLinkLocator => {
  
  
  return{ meetingLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjNkM2VhZjMtM2NhZi00ODU3LWFjNzAtZGRlY2U0ZGU2N2M0%40thread.v2/0?context=%7b%22Tid%22%3a%22de08c407-19b9-427d-9fe8-edf254300ca7%22%2c%22Oid%22%3a%22870d25a2-7748-4be2-b50b-5c15dbc2bc28%22%7d'};
};

ReactDOM.render(
  <div className="wrapper">
    <App userId={fromFlatCommunicationIdentifier('8:acs:83ba1749-c9b0-4479-9a57-011398af777e_00000019-acec-1578-8975-c93a0d003612') as CommunicationUserIdentifier} 
    token={'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjgzYmExNzQ5LWM5YjAtNDQ3OS05YTU3LTAxMTM5OGFmNzc3ZV8wMDAwMDAxOS1hY2VjLTE1NzgtODk3NS1jOTNhMGQwMDM2MTIiLCJzY3AiOjE3OTIsImNzaSI6IjE2ODgxNDA5MzUiLCJleHAiOjE2ODgyMjczMzUsInJnbiI6ImluIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiODNiYTE3NDktYzliMC00NDc5LTlhNTctMDExMzk4YWY3NzdlIiwicmVzb3VyY2VMb2NhdGlvbiI6ImluZGlhIiwiaWF0IjoxNjg4MTQwOTM1fQ.PgQOTdhBlyLKTf5rf-JK0YsPYOCABr8IAKX3fWzc5yCUcmkx-rdTuh8YG4TLIBiZwsDm4cur9xA6Qy3uYUD_7So392P7YG2NUugYVsoz8G3gy_ISdd92YiPWHsc2SserQzTqTe06rVD86OHa2ULZbPzNb4p18I562n4OhEXxdxO0gqvGktteFR5K0P1uTnrVsKcU3tJ7K1hIbRO_hF03oaLiDUR0DmfOVAQpIEZSGr4ls8qxp8jXy21nRVjayc-OI6PMyk0_1X2gwgA_ZgbdqSoASmX7ATOeeb9CIbBjWkmSXwHVDfKrBPmRELhxvXxiCuDDWXYPbWANUtlz9x6iTw'} 
    displayName={'Communication App'} 
    endpointUrl={'https://azurecommunicationservicesmustangs.communication.azure.com/'} 
    locator= {getTeamsLinkFromUrl()}    
     />
    
    CallWithChatExperience
  </div>,
  document.getElementById('root')
);