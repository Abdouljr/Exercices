// ignore_for_file: must_be_immutable

import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/common/app_style.dart';
import 'package:flutter_ecommerce/common/reusable_text.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class CustomAppBar extends StatelessWidget {
  const CustomAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: 12.w, vertical: 6.h),
        height: 110.h,
        width: width,
        color: kOffWhite,
        child: Container(
          margin: EdgeInsets.only(top: 20.h),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  CircleAvatar(
                    radius: 22.r,
                    backgroundImage: const NetworkImage(
                        'https://b.fssta.com/uploads/application/soccer/headshots/713.png'),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 6.h, left: 8.w),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          ReusableText(
                            text: "Deliver to",
                            style: appStyle(13, kSecondary, FontWeight.w600),
                          ),
                          Text(
                            "Bamako/Sabalibougou Rue 132",
                            overflow: TextOverflow.ellipsis,
                            style: appStyle(11, kGrayLigtht, FontWeight.normal),
                          )
                        ]),
                  )
                ],
              ),
              Text(
                getDateTime(),
                style: const TextStyle(fontSize: 30),
              )
            ],
          ),
        ));
  }

  String getDateTime() {
    DateTime now = DateTime.now();
    int heure = now.hour;
    if (heure >= 6 && heure < 14) {
      return ' ☀ ';
    } else if (heure >= 14 && heure < 18) {
      return ' 🌇 ';
    } else {
      return ' 🌒 ';
    }
  }
}
