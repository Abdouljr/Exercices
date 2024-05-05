import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/back_ground_container.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/hooks/foods/fetch_all_foods.dart';
import 'package:flutter_ecommerce/models/Food_model.dart';
import 'package:flutter_ecommerce/shimmers/foodlist_shimmer.dart';
import 'package:flutter_ecommerce/views/home/widgets/food_title.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AllFastesFoods extends HookWidget {
  const AllFastesFoods({super.key});

  @override
  Widget build(BuildContext context) {
    final hookResultat = useFetchAllFoods("41007428");
    List<FoodModel>? foodsList = hookResultat.data;
    final isLoading = hookResultat.isloading;
    return Scaffold(
        appBar: AppBar(
          elevation: 0.3,
          centerTitle: true,
          backgroundColor: kSecondary,
          leading: const BackButton(color: kLigthtWhite),
          title: ReusableText(
              text: "All Fastes Foods",
              style: appStyle(13, kLigthtWhite, FontWeight.w600)),
        ),
        body: BackGroundContainer(
          color: Colors.white,
          child: Padding(
            padding: EdgeInsets.all(12.h),
            child: isLoading
                ? const FoodsListShimmer()
                : ListView(
                    children: List.generate(foodsList!.length, (i) {
                    FoodModel food = foodsList[i];
                    return FoodTitle(food: food);
                  })),
          ),
        ));
  }
}
