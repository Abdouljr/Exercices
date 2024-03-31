// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/controllers/tab_index_controller.dart';
import 'package:flutter_ecommerce/views/cart/cart_page.dart';
import 'package:flutter_ecommerce/views/home/home_page.dart';
import 'package:flutter_ecommerce/views/profile/profile_page.dart';
import 'package:flutter_ecommerce/views/search/search_page.dart';
import 'package:flutter_vector_icons/flutter_vector_icons.dart';
import 'package:get/get.dart';

class MainScreen extends StatelessWidget {
  MainScreen({super.key});

  List<Widget> pagesList = const [
    HomePage(),
    SearchPage(),
    CartPage(),
    ProfilePage(),
  ];

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(TabIndexController());
    return Obx(() => Scaffold(
          body: Stack(
            children: [
              pagesList[controller.tabIndex],
              Align(
                alignment: Alignment.bottomCenter,
                child: Theme(
                    data: Theme.of(context).copyWith(canvasColor: kPrimary),
                    child: BottomNavigationBar(
                      showSelectedLabels: false,
                      showUnselectedLabels: false,
                      onTap: (value) {
                        controller.setTabIndex = value;
                      },
                      currentIndex: controller.tabIndex,
                      unselectedIconTheme:
                          const IconThemeData(color: Colors.black38),
                      selectedIconTheme: const IconThemeData(color: kSecondary),
                      items: [
                        BottomNavigationBarItem(
                            icon: controller.tabIndex == 0
                                ? const Icon(AntDesign.appstore1)
                                : const Icon(AntDesign.appstore_o),
                            label: 'Home'),
                        const BottomNavigationBarItem(
                            icon: Icon(Icons.search), label: 'Search'),
                        const BottomNavigationBarItem(
                            icon: Badge(
                                label: Text('1'),
                                child: Icon(FontAwesome.opencart)),
                            label: 'Cart'),
                        const BottomNavigationBarItem(
                            icon: Icon(Icons.person), label: 'Profile'),
                      ],
                    )),
              )
            ],
          ),
        ));
  }
}
