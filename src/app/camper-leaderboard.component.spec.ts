import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CAMPERLEADERBOARDAppComponent } from '../app/camper-leaderboard.component';

beforeEachProviders(() => [CAMPERLEADERBOARDAppComponent]);

describe('App: CAMPERLEADERBOARD', () => {
  it('should create the app',
      inject([CAMPERLEADERBOARDAppComponent], (app: CAMPERLEADERBOARDAppComponent) => {
    expect(app).toBeTruthy();
  }));

  
});
