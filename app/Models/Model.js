import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import Subway from '../../assets/Subway.png'
class SavedReward {
  constructor(points, picture, rewardDescription, restaurantName, code) {
    this.points = points;
    this.picture = picture;
    this.rewardDescription = rewardDescription;
    this.restaurantName = restaurantName;
    this.code = code;
  }
}

class Rewards {
  rewards1 = [
    new SavedReward(20, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, Subway, "Buy 1 get 1 free", "Subway", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
  ];
  
  rewards2 = [
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, Subway, "Buy 1 get 1 free", "Subway", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell", "6132 7279 5118 3797"),
  ];
}



export default Rewards;