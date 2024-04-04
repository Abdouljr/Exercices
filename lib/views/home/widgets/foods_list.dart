import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/constants/uidata.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class FoodsList extends StatelessWidget {
  const FoodsList({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(left: 12.w, top: 10.h),
      height: 210.h,
      child: ListView(
          scrollDirection: Axis.horizontal,
          children: List.generate(foods.length, (i) {
            var food = foods[i];
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: Container(
                height: 200.h,
                width: 150.w,
                color: kSecondary,
              ),
            );
          })),
    );
  }
}
