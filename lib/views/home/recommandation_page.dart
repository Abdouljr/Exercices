import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/back_ground_container.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/constants/uidata.dart';
import 'package:flutter_ecommerce/views/home/widgets/food_title.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class Recommandations extends StatelessWidget {
  const Recommandations({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          elevation: 0.3,
          centerTitle: true,
          backgroundColor: kSecondary,
          leading: const BackButton(color: kLigthtWhite),
          title: ReusableText(
              text: "Recommandations",
              style: appStyle(13, kLigthtWhite, FontWeight.w600)),
        ),
        body: BackGroundContainer(
          color: Colors.white,
          child: Padding(
            padding: EdgeInsets.all(12.h),
            child: ListView(
                children: List.generate(foods.length, (i) {
              var food = foods[i];
              return FoodTitle(food: food);
            })),
          ),
        ));
  }
}
