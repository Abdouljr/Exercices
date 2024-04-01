import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/constant.dart';

class AllCategories extends StatelessWidget {
  const AllCategories({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: kPrimary,
        title: const Text("All categories"),
      ),
      body: Container(
        height: height,
        width: width,
        color: kPrimary,
      ),
    );
  }
}
