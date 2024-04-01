import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/controllers/category_controller.dart';
import 'package:flutter_ecommerce/views/categorie/all_categories.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class CategoriyWidget extends StatelessWidget {
  const CategoriyWidget({
    super.key,
    required this.category,
  });

  final dynamic category;

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(CategoryController());
    return GestureDetector(
        onTap: () {
          if (controller.category == category['_id']) {
            controller.updateCategory = '';
            controller.updateTitle = '';
          } else if (category['title'] == 'More') {
            Get.to(() => const AllCategories(),
                transition: Transition.fadeIn,
                duration: const Duration(milliseconds: 900));
          } else {
            controller.updateCategory = category['_id'];
            controller.updateTitle = category['title'];
          }
        },
        child: Obx(
          () => Container(
            margin: EdgeInsets.only(right: 5.w),
            padding: EdgeInsets.only(top: 4.h),
            width: width * 0.19,
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10.r),
                border: Border.all(
                    color: controller.category == category['_id']
                        ? kSecondary
                        : kOffWhite,
                    width: 1.w)),
            child: Column(
              children: [
                SizedBox(
                    height: 35.h,
                    child: Image.network(
                      category['imageUrl'],
                      fit: BoxFit.contain,
                    )),
                ReusableText(
                    text: category['title'],
                    style: appStyle(11, kDark, FontWeight.normal))
              ],
            ),
          ),
        ));
  }
}
