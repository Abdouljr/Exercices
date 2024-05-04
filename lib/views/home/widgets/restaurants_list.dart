import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/hooks/restaurants/fetch_restaurants.dart';
import 'package:flutter_ecommerce/models/restaurant_model.dart';
import 'package:flutter_ecommerce/shimmers/nearby_shimmer.dart';
import 'package:flutter_ecommerce/views/home/widgets/restaurant_widget.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class NearbyRestaurents extends HookWidget {
  const NearbyRestaurents({super.key});

  @override
  Widget build(BuildContext context) {
    final hookResult = useFetchRestaurants("41007428");
    List<RestaurantModel>? restaurantsList = hookResult.data;
    final isLoading = hookResult.isloading;
    return isLoading
        ? const NearbyShimmer()
        : Container(
            padding: EdgeInsets.only(left: 12.w, top: 10.h),
            height: 190.h,
            child: ListView(
                scrollDirection: Axis.horizontal,
                children: List.generate(restaurantsList!.length, (i) {
                  RestaurantModel restaurant = restaurantsList[i];
                  return RestaurantWidget(
                      image: restaurant.imageUrl,
                      title: restaurant.title,
                      logo: restaurant.logoUrl,
                      time: restaurant.time,
                      rating: restaurant.ratingCount);
                })),
          );
  }
}
