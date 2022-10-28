# Lamp - Light a Meaningful Path

A full video tutorial of the Lamp app can be viewed here: https://www.loom.com/share/b3a35c7be04c4e57aef2b47a7fa12f57

Lamp is a full stack Express/React application designed to help connect volunteers and their skills with non-profit organizations. Volunteers are able to search for organizations and send a request volunteering their time and services. Organizations receive these requests and are given the ability to accept/decline the request. Each volunteer and organization is authenticated through a JS web token, creating a personalized dashboard where they can perform their respective actions. Backend/database can be viewed here: https://github.com/jpswt/LAMP-Backend

## Lamp Landing Page

This page provides information to the user about how to use the app as well as redirecting them to login/register.


<img width="1496" alt="landing" src="https://user-images.githubusercontent.com/94721942/198677589-a2e1fde8-e093-402c-a707-a252f5daf824.png">
<img width="1465" alt="landing2" src="https://user-images.githubusercontent.com/94721942/198677602-1739d03b-e833-4398-b7fe-f408659dab24.png">

## Login and Register

Below are the login and registration pages for both volunteers and organizations.  Based on their JS web token credentials, the logged in user is redirected to their respective dashboards, either for volunteer or an organization.

<img width="1478" alt="login" src="https://user-images.githubusercontent.com/94721942/198678476-8356fbff-42d5-4ccf-be53-529660becc39.png">
<img width="1473" alt="register" src="https://user-images.githubusercontent.com/94721942/198678487-63746c7c-aae4-4d7a-9d46-61653229ce4d.png">

## Volunteer Dashboard

Below is the volunteer dashboard page.  A volunteer is able to search for organizations via google maps and an organization list.  

<img width="1419" alt="volunteer-dashboard" src="https://user-images.githubusercontent.com/94721942/198680640-c82da424-53e8-47d4-932d-c2ae7f04c1e9.png">

They can select the organization they would like to share their skills with and send them a request.

<img width="1210" alt="volunteer-request" src="https://user-images.githubusercontent.com/94721942/198680655-7dcedcbf-be7c-4ce0-9690-5d372d73bad8.png">

They can view the current status of the request to determine if it is pending, accepted or declined.  

<img width="1309" alt="volunteer-req-board" src="https://user-images.githubusercontent.com/94721942/198680694-e6069fe1-c6c8-4e47-9d3c-3f225e092b00.png">

## Organization Dashboard

Below is the organization dashboard.  An organization can view all incoming user requests and determine if they would like to accept or decline them.

<img width="1446" alt="Screen Shot 2022-10-28 at 11 24 14 AM" src="https://user-images.githubusercontent.com/94721942/198687158-ab6106e7-c765-4578-9a84-901dd013a9b0.png">

An organization can view more details about the user request.

<img width="1376" alt="Screen Shot 2022-10-28 at 11 27 07 AM" src="https://user-images.githubusercontent.com/94721942/198687908-60c425eb-dad8-4d48-81d5-fc64eac4418e.png">


Once the organization accepts/declines a request, they will automatically be moved to either the accepted or declined tabs as seen below.

<img width="1461" alt="Screen Shot 2022-10-28 at 11 24 38 AM" src="https://user-images.githubusercontent.com/94721942/198687484-3110c8eb-326d-4cd5-98e7-15849dddbea1.png">

<img width="1386" alt="Screen Shot 2022-10-28 at 11 24 58 AM" src="https://user-images.githubusercontent.com/94721942/198687519-dff46c7f-f9da-41c9-93d2-383db1c46e5c.png">

## Technologies Used
Frontend:
- React JS
- CSS3
- Material UI
- Google Maps API
- Geolcoding API

Backend:
- Node.js
- Express.js




