import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/controllers/search_controller.dart';
import 'package:flutter_ecommerce/models/Food_model.dart';
import 'package:flutter_ecommerce/views/home/widgets/food_title.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class SearchResult extends StatelessWidget {
  const SearchResult({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(SearchFoodController());
    return Container(
      padding: EdgeInsets.fromLTRB(12.w, 10.h, 12.w, 0),
      height: height,
      child: ListView.builder(
          itemCount: controller.searchResult!.length,
          itemBuilder: (context, i) {
            FoodModel food = controller.searchResult![i];
            return FoodTitle(food: food);
          }),
    );
  }
}
