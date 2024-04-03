import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/custom_app_bar.dart';
import 'package:flutter_ecommerce/common/custom_container.dart';
import 'package:flutter_ecommerce/common/heading.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/views/home/all_fastes_foods.dart';
import 'package:flutter_ecommerce/views/home/recommandation_page.dart';
import 'package:flutter_ecommerce/views/home/all_nearby_restaurants.dart';
import 'package:flutter_ecommerce/views/home/widgets/category_list.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: kPrimary,
        appBar: PreferredSize(
            preferredSize: Size.fromHeight(130.r), child: const CustomAppBar()),
        body: SafeArea(
            child: CustomContainer(
          containerContent: Column(
            children: [
              const CategoryList(),
              Heading(
                text: 'Nearby Restaurants',
                onTap: () {
                  Get.to(() => const AllNearbyRestaurants(),
                      transition: Transition.cupertino,
                      duration: const Duration(milliseconds: 900));
                },
              ),
              Heading(
                text: 'Try Something New',
                onTap: () {
                  Get.to(() => const Recommandations(),
                      transition: Transition.cupertino,
                      duration: const Duration(milliseconds: 900));
                },
              ),
              Heading(
                text: 'Food closer to you',
                onTap: () {
                  Get.to(() => const AllFastesFoods(),
                      transition: Transition.cupertino,
                      duration: const Duration(milliseconds: 900));
                },
              ),
            ],
          ),
        )));
  }
}
