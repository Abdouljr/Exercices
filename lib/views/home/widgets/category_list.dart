import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/uidata.dart';
import 'package:flutter_ecommerce/hooks/fetch_categories.dart';
import 'package:flutter_ecommerce/models/restaurant_model.dart';
import 'package:flutter_ecommerce/shimmers/categories_shimmer.dart';
import 'package:flutter_ecommerce/views/home/widgets/categoriy_widget.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class CategoryList extends HookWidget {
  const CategoryList({super.key});

  @override
  Widget build(BuildContext context) {
    print("object");
    final hookResult = useFetchCategories();
    //List<CategoriesModel> categoriesList = hookResult.data;
    // final isLoading = hookResult.isloading;
    // final error = hookResult.error;
    return Container(
      padding: EdgeInsets.only(left: 12.w, top: 10.h),
      height: 75.h,
      child: ListView(
          scrollDirection: Axis.horizontal,
          children: List.generate(categories.length, (i) {
            var category = categories[i];
            return CategoriyWidget(category: category);
          })),
    );
  }
}
