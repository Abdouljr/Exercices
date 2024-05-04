import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/hooks/foods/fetch_foods.dart';
import 'package:flutter_ecommerce/models/Food_model.dart';
import 'package:flutter_ecommerce/shimmers/nearby_shimmer.dart';
import 'package:flutter_ecommerce/views/home/widgets/food_widget.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class FoodsList extends HookWidget {
  const FoodsList({super.key});

  @override
  Widget build(BuildContext context) {
    final hookResult = useFetchFoods("41007428");
    List<FoodModel>? foodsList = hookResult.data;
    final isLoading = hookResult.isloading;
    return isLoading
        ? const NearbyShimmer()
        : Container(
            padding: EdgeInsets.only(left: 12.w, top: 10.h),
            height: 184.h,
            child: ListView(
                scrollDirection: Axis.horizontal,
                children: List.generate(foodsList!.length, (i) {
                  FoodModel food = foodsList[i];
                  return FoodWidget(
                      image: food.imageUrl[0],
                      title: food.title,
                      time: food.time,
                      price: food.price.toStringAsFixed(2));
                })),
          );
  }
}
