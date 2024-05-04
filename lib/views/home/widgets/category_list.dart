import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/hooks/fetch_categories.dart';
import 'package:flutter_ecommerce/models/categories_model.dart';
import 'package:flutter_ecommerce/shimmers/categories_shimmer.dart';
import 'package:flutter_ecommerce/views/home/widgets/categoriy_widget.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class CategoryList extends HookWidget {
  const CategoryList({super.key});

  @override
  Widget build(BuildContext context) {
    final hookResult = useFetchCategories();
    List<CategoriesModel>? categoriesList = hookResult.data;
    final isLoading = hookResult.isloading;
    //final error = hookResult.error;
    return Container(
      padding: EdgeInsets.only(left: 12.w, top: 10.h),
      height: 85.h,
      child: isLoading
          ? const CatergoriesShimmer()
          : ListView(
              scrollDirection: Axis.horizontal,
              children: List.generate(categoriesList!.length, (i) {
                CategoriesModel category = categoriesList[i];
                return CategoriyWidget(category: category);
              })),
    );
  }
}
