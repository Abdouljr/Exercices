import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/back_ground_container.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/hooks/categories/fetch_all_categories.dart';
import 'package:flutter_ecommerce/models/categories_model.dart';
import 'package:flutter_ecommerce/shimmers/foodlist_shimmer.dart';
import 'package:flutter_ecommerce/views/categorie/widgets/category_title.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AllCategories extends HookWidget {
  const AllCategories({super.key});

  @override
  Widget build(BuildContext context) {
    final hookResultat = useFetchAllCategories();
    List<CategoriesModel>? allCategories = hookResultat.data;
    final isLoading = hookResultat.isloading;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: kOffWhite,
        elevation: 0,
        title: ReusableText(
            text: "Categories", style: appStyle(12, kGray, FontWeight.w600)),
      ),
      body: BackGroundContainer(
        color: kOffWhite,
        child: Container(
          height: height,
          padding: EdgeInsets.only(left: 12.w, top: 10.h),
          child: isLoading
              ? const FoodsListShimmer()
              : ListView(
                  scrollDirection: Axis.vertical,
                  children: List.generate(allCategories!.length, (i) {
                    CategoriesModel category = allCategories[i];
                    return CategoryTitle(category: category);
                  })),
        ),
      ),
    );
  }
}
