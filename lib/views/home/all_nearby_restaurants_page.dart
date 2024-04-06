import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/back_ground_container.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/constants/uidata.dart';
import 'package:flutter_ecommerce/views/home/widgets/restaurant_title.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AllNearbyRestaurants extends StatelessWidget {
  const AllNearbyRestaurants({super.key});

  @override
  Widget build(BuildContext context) {
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
          child: Padding(
            padding: EdgeInsets.all(12.h),
            child: ListView(
                children: List.generate(restaurants.length, (i) {
              var restaurant = restaurants[i];
              return RestaurantTitle(restaurant: restaurant);
            })),
          ),
        )));
  }
}
