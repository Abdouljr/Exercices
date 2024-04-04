import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class RestaurantWidget extends StatelessWidget {
  const RestaurantWidget(
      {super.key,
      required this.image,
      required this.title,
      required this.logo,
      required this.time,
      required this.rating,
      this.onTap});

  final String image;
  final String title;
  final String logo;
  final String time;
  final String rating;
  final void Function()? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Padding(
        padding: EdgeInsets.only(right: 12.w),
        child: Container(
          width: width * 75,
          height: 192.h,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12.r), color: kLigthtWhite),
          child: ListView(
            physics: const NeverScrollableScrollPhysics(),
            children: [
              Padding(
                padding: EdgeInsets.all(8.w),
                child: Stack(
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(12.r),
                      child: SizedBox(
                        height: 112.h,
                        width: width * 0.8,
                        child: Image.network(
                          image,
                          fit: BoxFit.fitWidth,
                        ),
                      ),
                    ),
                    Positioned(
                        top: 10.h,
                        right: 10.w,
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(50.r),
                          child: Container(
                            color: kLigthtWhite,
                            padding: EdgeInsets.all(2.h),
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(50.r),
                              child: Image.network(logo,
                                  fit: BoxFit.cover, width: 20.w, height: 20.h),
                            ),
                          ),
                        ))
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
