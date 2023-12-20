# Moist Map - A web development project in Interaction Programming and the Dynamic Web 
<b>University</b>: KTH Royal Institute of Technology, Stockholm, Sweden <br>
<b>Course code</b>: DH2642 <br>

### Image...
### Description...

### How to run locally: 
- `npm install` to install dependencies
- `npm start` to start the server

### Need to have:
- API key from [OpenWeatherMap](https://openweathermap.org/api) --> put in apiConfig.js file in root 
- 

### Website: [Moist-Map](https://moist-map.web.app/)
## TODO: 

- [ ] Add system status for when waiting for API request 
- [ ] Fix refresh on 2nd view 
- [ ] Improve styling 
- [ ] Memes / quotes 


### D Level Grading Criteria

1. **Architecture/Code**
   - Application state mixed with Persistence but separated from Presenters and Views.
   - Views with multiple responsibilities/roles.
   - One module per View.
   - View-Presenter mix incidentally.

2. **Usability/User Experience/Improve Usability**
   - Somewhat clear target group, unclear benefits for the user.
   - Moderately efficient task accomplishment.
   - User feels somewhat in control.
   - Satisfactory feedback on user actions and visibility of system status.
   - Little user consultation at prototyping or formative evaluation stage.
   - Some improvement based on usability feedback from users in the target group.

3. **Web APIs and Persistence**
   - Remote data used from a single source but not creating added value for users based on the data provided by the API.
   - Clear system status shown when waiting for API requests and user can perform other actions while waiting for the response.
   - Well-separated persisted data per authenticated user.

4. **Group Cooperation**
   - Good balance of work in the group (25% of code can be multi-author).
   - Role separation in the group (per component or per concern: views, interaction model/application state…).
   - Work amount and roles documented through individual self-reflections.
