import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/custom_container.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: kPrimary,
        appBar: PreferredSize(
            preferredSize: Size.fromHeight(130.r),
            child: Container(
              height: 130.r,
            )),
        body: SafeArea(
            child: CustomContainer(
          containerContent: Container(),
        )));
  }
}
