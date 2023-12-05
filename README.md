# iprog_project_WW


## Website: [Moist-Map](https://moist-map.web.app/)


## Frågor till onsdag
- Hur ska jag komplettera 


### 
- Need a specific target group (meme-ish) - novelty 
- Google inlogg 
- Deploy 
- Project review nästa vecka 
- mvp enda krav 


## TODO: 
- [ ] Throughout make changes in App.jsx and index.jsx to visually and functionally test the app
- [ ] Make components (in views)
    - [ ] SearchCard 
    - [ ] WeatherCard 
- [ ] Make views
    - [ ] CityWeatherView.jsx
    - [ ] HomeView.jsx 
- [ ] Make presenters
    - [ ] CityWeatherPresenter.jsx
    - [ ] HomePresenter.jsx
- [ ] Make the model
- [x] Connect the API
- [x] Deploy to firebase

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
