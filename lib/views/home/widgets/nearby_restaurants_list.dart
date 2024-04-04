import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/uidata.dart';
import 'package:flutter_ecommerce/views/home/widgets/restaurant_widget.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class NearbyRestaurents extends StatelessWidget {
  const NearbyRestaurents({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(left: 12.w, top: 10.h),
      height: 194.h,
      child: ListView(
          scrollDirection: Axis.horizontal,
          children: List.generate(restaurants.length, (i) {
            var restaurant = restaurants[i];
            return RestaurantWidget(
                image: restaurant['imageUrl'],
                title: restaurant['title'],
                logo: restaurant['logoUrl'],
                time: restaurant['time'],
                rating: restaurant['ratingCount']);
          })),
    );
  }
}
