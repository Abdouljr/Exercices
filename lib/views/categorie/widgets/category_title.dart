import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/models/categories_model.dart';
import 'package:flutter_ecommerce/views/categorie/category_page.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class CategoryTitle extends StatelessWidget {
  const CategoryTitle({
    super.key,
    required this.category,
  });

  final CategoriesModel category;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: () {
        Get.to(() => const CategoryPage(),
            transition: Transition.fadeIn,
            duration: const Duration(milliseconds: 900));
      },
      leading: CircleAvatar(
        radius: 18.r,
        backgroundColor: kGrayLigtht,
        child: Image.network(
          category.imageUrl,
          fit: BoxFit.contain,
        ),
      ),
      title: ReusableText(
        text: category.title,
        style: appStyle(12, kDark, FontWeight.normal),
      ),
      trailing: Icon(Icons.arrow_forward_ios_rounded, color: kGray, size: 15.r),
    );
  }
}
