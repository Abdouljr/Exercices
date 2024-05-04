import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/back_ground_container.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/hooks/restaurants/fetch_all_restaurants.dart';
import 'package:flutter_ecommerce/models/restaurant_model.dart';
import 'package:flutter_ecommerce/shimmers/foodlist_shimmer.dart';
import 'package:flutter_ecommerce/views/home/widgets/restaurant_title.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AllNearbyRestaurants extends HookWidget {
  const AllNearbyRestaurants({super.key});

  @override
  Widget build(BuildContext context) {
    final hookResult = useFetchAllRestaurants("41007428");
    List<RestaurantModel>? restaurantsList = hookResult.data;
    final isLoading = hookResult.isloading;
    return Scaffold(
        appBar: AppBar(
          elevation: 0.3,
          centerTitle: true,
          backgroundColor: kSecondary,
          leading: const BackButton(color: kLigthtWhite),
          title: ReusableText(
              text: "All nearby Restaurants",
              style: appStyle(13, kLigthtWhite, FontWeight.w600)),
        ),
        body: SafeArea(
            child: BackGroundContainer(
          color: Colors.white,
          child: isLoading
              ? const FoodsListShimmer()
              : Padding(
                  padding: EdgeInsets.all(12.h),
                  child: ListView(
                      children: List.generate(restaurantsList!.length, (i) {
                    RestaurantModel restaurant = restaurantsList[i];
                    return RestaurantTitle(restaurant: restaurant);
                  })),
                ),
        )));
  }
}
