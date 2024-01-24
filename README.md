
## Airline Roster App
A React Native application that presents the user’s roster which holds the monthly planning of duties.

## Preview:

![Simulator Screenshot - iPhone 14 Pro - 2024-01-24 at 23 19 06](https://github.com/RiddhiP1997/roster-app/assets/56933507/703580a1-ae36-48eb-8904-5844b15aed46)

![Simulator Screenshot - iPhone 14 Pro - 2024-01-24 at 23 19 08](https://github.com/RiddhiP1997/roster-app/assets/56933507/b2480e33-90fb-4f6a-b804-4b09af2b4e25)

## Running the project

- Clone this project
```
git clone https://github.com/RiddhiP1997/roster-app.git
```

- Navigate to the project directory
```
cd roster-app
```

- Install dependencies
```
npm install
```
- To run the project on android run below command and you are good to go!

```
npm run android
```
- To run the project on iOS, an additional step is required, run below command:

```
cd ios && pod install && cd ..
```

- Finally, run below command:

```
npm run ios
```

- You are all set!

> If you wish to run the app using yarn, pls refer [this](https://medium.com/@julien-ctx/how-to-clone-build-and-run-a-react-native-app-from-a-github-repository-7ab781e52a14) article.

## Details:

The following duties can appear on a roster and can be recognized by the app:
- Day Off - Not scheduled to work.
- Report Event - Start of a day of working. A day can have multiple flights.
- Flight Event - Flight from Departure Airport to Arrival Airport
- Debrief Event - End of a day of working.
- Layover Event - When you sleep at a Arrival Airport and fly out later.
- Simulator / Training Event - Training Course
- Standby Event - On reserve duty. Can be called by the airline any time.
