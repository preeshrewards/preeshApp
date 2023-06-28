import restaurantImagePlaceholder from '../../assets/restaurantImagePlaceholder.png'
import Subway from '../../assets/Subway.png'
class SavedReward {
  constructor(points, picture, rewardDescription, restaurantName) {
    this.points = points;
    this.picture = picture;
    this.rewardDescription = rewardDescription;
    this.restaurantName = restaurantName;
  }
}

class Rewards {
  rewards1 = [
    new SavedReward(20, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, Subway, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
  ];
  
  rewards2 = [
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, Subway, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
    new SavedReward(10, restaurantImagePlaceholder, "Buy 1 get 1 free", "Taco Bell"),
  ];
}

export default Rewards;