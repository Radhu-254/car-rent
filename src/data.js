//import car images
import car1 from "./assets/img/car/1.avif"
import car2 from "./assets/img/car/2.avif"
import car3 from "./assets/img/car/3.avif"
import car4 from "./assets/img/car/4.avif"
import car5 from "./assets/img/car/5.avif"
import car6 from "./assets/img/car/6.avif"

//import car Large images
import car11 from "./assets/img/car/1Lg.avif"
import car22 from "./assets/img/car/2Lg.avif"
import car33 from "./assets/img/car/3Lg.avif"
import car44 from "./assets/img/car/4Lg.avif"
import car55 from "./assets/img/car/5Lg.avif"
import car66 from "./assets/img/car/6Lg.avif"

//import suv images
import suv1 from "./assets/img/suv/1.avif"
import suv2 from "./assets/img/suv/2.avif"
import suv3 from "./assets/img/suv/3.avif"
import suv4 from "./assets/img/suv/4.avif"
import suv5 from "./assets/img/suv/5.avif"
import suv6 from "./assets/img/suv/6.avif"

//import suv Large images
import suv11 from "./assets/img/suv/1Lg.avif"
import suv22 from "./assets/img/suv/2Lg.avif"
import suv33 from "./assets/img/suv/3Lg.avif"
import suv44 from "./assets/img/suv/4Lg.avif"
import suv55 from "./assets/img/suv/5Lg.avif"
import suv66 from "./assets/img/suv/6Lg.avif"

//import truck images
import truck1 from "./assets/img/truck/1.avif"
import truck2 from "./assets/img/truck/2.avif"

//import truck Large images
import truck11 from "./assets/img/truck/1Lg.avif"
import truck22 from "./assets/img/truck/2Lg.avif"

//import van images
import van1 from "./assets/img/van/1.avif"
import van2 from "./assets/img/van/2.avif"
import van3 from "./assets/img/van/3.avif"


//import van Large images
import van11 from "./assets/img/van/1Lg.avif"
import van22 from "./assets/img/van/2Lg.avif"
import van33 from "./assets/img/van/3Lg.avif"


export const housesData = [
  {
    id: 1,
    type: 'Car',
    name: 'Mitsubishi Mirage or similar',
    description:
      'Economy cars are smaller vehicles that typically seat up to four passengers. Their high fuel economy makes them great for city driving, while their size makes them easy to maneuver through traffic.',
    image: car1,
    imageLg: car11,
    country: 'Vancouver',
    address: 'Economy Car Rental',
    automatic: 'Automatic',
    people: '4',
    bag: '2',
    year: '2016',
    price: '85',
    features: 'Gasoline Vehicle, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 2,
    type: 'Car',
    name: 'Nissan Versa or similar',
    description:'Compact cars offer great gas mileage and the ease of driving and parking in high traffic areas. Reserve now and get low rates on a compact car rental from Enterprise Rent-A-Car.A compact car is a smaller vehicle, such as a Nissan Versa, that seats up to five people. This type of car is easy to park, plus gets excellent gas mileage.',
    image: car2,
    imageLg: car22,
    country: 'Ottawa',
    address: 'Compact Car Rental',
    automatic: 'Automatic',
    people: '5',
    bag: '2',
    year: '2016',
    price: '100',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 3,
    type: 'Car',
    name: 'Ford Mustang Convertible or similar',
    description:'Rent a convertible and enjoy your next trip in style. Whether you are taking a road trip along the Pacific Coast Highway, enjoying a drive in the desert of the Southwest, or exploring Toronto city, a convertible is the perfect choice.',
    image: car3,
    imageLg: car33,
    country: 'Toronto',
    address: 'Convertible Car Rental',
    automatic: 'Automatic',
    people: '4',
    bag: '2',
    year: '2016',
    price: '200',
    features: 'Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 4,
    type: 'Car',
    name: 'Dodge Challenger or similar',
    description:'A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving and racing capability.Definitions of sports cars often relate to how the car design is optimised for dynamic-performance,without any specific minimum requirements.',
    image: car4,
    imageLg: car44,
    country: 'Vancouver',
    address: 'Sports Car Rental',
    automatic: 'Automatic',
    people: '4',
    bag: '2',
    year: '2016',
    price: '220',
    features: 'Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 5,
    type: 'Car',
    name: 'BMW 7-Series, Audi A8 or similar',
    description:'The lavish design of an elite convertible rental provides the ultimate driving experience. Drive a Maserati Ghibli or similar.',
    image: car5,
    imageLg: car55,
    country: 'Toronto',
    address: 'Convertible Elite Car Rental',
    automatic: 'Automatic',
    people: '4',
    bag: '2',
    year: '2016',
    price: '250',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 6,
    type: 'Car',
    name: 'BMW 5-Series, Mercedes Benz E-Class or similar',
    description:'A premium elite car combines a powerful engine with a luxurious intertior for the ultimate driving experience. Drive an Audi A6, BMW 5 Series, or similar.',
    image: car6,
    imageLg: car66,
    country: 'Toronto',
    address: 'Premium Elite Car Rental',
    automatic: 'Automatic',
    people: '5',
    bag: '4',
    year: '2016',
    price: '300',
    features: 'Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 7,
    type: 'SUV',
    name: 'Nissan Kicks or similar',
    description:'A compact SUV provides plenty of room for bags, plus nimble handing that is great for city driving.',
    image: suv1,
    imageLg: suv11,
    country: 'Ottawa',
    address: 'Compact SUV Rental',
    automatic: 'Automatic',
    people: '5',
    bag: '3',
    year: '2016',
    price: '125',
    features: 'Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 8,
    type: 'SUV',
    name: 'Ford Edge or similar',
    description:'A standard SUV rental provides plenty of room for passengers and luggage. SUVs are great for business, leisure, or weekend road trips. Reserve now and get low rates on a standard SUV from Enterprise Rent-A-Car.',
    image: suv2,
    imageLg: suv22,
    country: 'Vancouver',
    address: 'Standard SUV Rental',
    automatic: 'Automatic',
    people: '5',
    bag: '5',
    year: '2016',
    price: '145',
    features: 'Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 9,
    type: 'SUV',
    name: 'Chevrolet Tahoe or similar',
    description:'A large SUV rental has room for up to seven people and offers third row of seating along with plenty of room for luggage. Full-size SUVs are great for weekend road trips and special occasions. Start a reservation to see pricing and availability for daily and weekly rentals.',
    image: suv3,
    imageLg: suv33,
    country: 'Vancouver',
    address: 'Full-Size SUV Rental',
    automatic: 'Automatic',
    people: '7',
    bag: '3',
    year: '2016',
    price: '145',
    features: 'Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 10,
    type: 'SUV',
    name: 'BMW X3 or similar',
    description:'The Premium Elite class includes SUVs like the Lincoln MKX, BMW X3, and more. This size vehicle is easy to drive and still provides plenty of leg room and luggage space.',
    image: suv4,
    imageLg: suv44,
    country: 'Ottawa',
    address: 'Premium Elite SUV Rental',
    automatic: 'Automatic',
    people: '5',
    bag: '4',
    year: '2016',
    price: '250',
    features: 'Leather Interior, Gasoline Vehicle, Bluetooth, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 11,
    type: 'SUV',
    name: 'Jeep Wrangler or similar',
    description:'Rent a 2-door Jeep Wrangler and embark on your next adventure. Whether it is exploring the beautiful Hawaii beaches, taking a trip along the Pacific Coast Highway, or a driving through New York City, a Jeep is a great choice.',
    image: suv5,
    imageLg: suv55,
    country: 'Toronto',
    address: 'Rent a Jeep Wrangler (2-Door)',
    automatic: 'Automatic',
    people: '4',
    bag: '3',
    year: '2016',
    price: '230',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 12,
    type: 'SUV',
    name: 'Jeep Wrangler Unlimited or similar',
    description:'Rent a 4-door Jeep Wrangler and embark on your next adventure. Whether it is exploring the beautiful Hawaii beaches, taking a trip along the Pacific Coast Highway, or a driving through New York City, a Jeep is a great choice.',
    image: suv6,
    imageLg: suv66,
    country: 'Toronto',
    address: 'Rent a Jeep Wrangler (4-Door)',
    automatic: 'Automatic',
    people: '4',
    bag: '3',
    year: '2016',
    price: '275',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 13,
    type: 'Truck',
    name: 'Chevrolet Colorado or similar',
    description:'A small pickup truck rental is great for hauling smaller items that will not fit in your own car. Reserve now and get low rates on a small pickup truck rental from Enterprise Rent-A-Car.',
    image:truck1,
    imageLg: truck11,
    country: 'Toronto',
    address: 'Pickup Truck Rental',
    automatic: 'Automatic',
    people: '5',
    bag: '5',
    year: '2016',
    price: '250',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 14,
    type: 'Truck',
    name: 'Ford F150 or similar',
    description:'Need to haul or move something? A pickup truck rental has the space, power, and durability to for the job. Reserve now and get low rates on a pickup truck rental from Enterprise Rent-A-Car.',
    image: truck2,
    imageLg: truck22,
    country: 'Vancouver',
    address: 'Large Pickup Truck Rental',
    automatic: 'Automatic',
    people: '4',
    bag: '4',
    year: '2016',
    price: '280',
    features: 'Bluetooth, Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 15,
    type: 'Van',
    name: 'Chrysler Pacifica or similar',
    description:'A minivan rental is perfect for long road trips and family vacations with room for 7 people. Reserve now and get low rates on a minivan rental whether you are looking for a rental for a few days or weeks. Start a reservation to see pricing and availability.',
    image:van1,
    imageLg: van11,
    country: 'Toronto',
    address: '7-Passenger Minivan Rental',
    automatic: 'Automatic',
    people: '7',
    bag: '5',
    year: '2016',
    price: '145',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 16,
    type: 'Van',
    name: 'Toyota Sienna or similar',
    description:'Eight passenger minivan rentals are great for traveling with a large group whether it is for a family vacation or business trip. Reserve now and get low rates on a minivan rental from Enterprise Rent-A-Car.',
    image: van2,
    imageLg: van22,
    country: 'Vancouver',
    address: '8 Passenger Minivan Rental',
    automatic: 'Automatic',
    people: '8',
    bag: '5',
    year: '2016',
    price: '200',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },
  {
    id: 17,
    type: 'Van',
    name: 'Ford Transit Wagon or similar',
    description:'12 Passenger vans are ideal for hauling large groups around town or on a long road trip. Enjoy the convenience of a large van for your next trip.',
    image: van3,
    imageLg: van33,
    country: 'Ottawa',
    address: '12 Passenger Van Rental',
    automatic: 'Automatic',
    people: '12',
    bag: '7',
    year: '2016',
    price: '280',
    features: 'Gasoline Vehicle, Cruise control, AM/FM Stereo Radio, Automatic, Air Conditioning'
  },

];
