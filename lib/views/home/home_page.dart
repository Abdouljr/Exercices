import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/custom_app_bar.dart';
import 'package:flutter_ecommerce/common/custom_container.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/views/home/widgets/category_list.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: kPrimary,
        appBar: PreferredSize(
            preferredSize: Size.fromHeight(130.r), child: const CustomAppBar()),
        body: const SafeArea(
            child: CustomContainer(
          containerContent: Column(
            children: [CategoryList()],
          ),
        )));
  }
}
