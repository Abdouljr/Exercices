import 'package:flutter/material.dart';
import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/models/Food_model.dart';
import 'package:flutter_ecommerce/models/api_error.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class SearchFoodController extends GetxController {
  final RxBool _isLoading = false.obs;

  bool get isLoading => _isLoading.value;

  set setLoading(bool newValue) {
    _isLoading.value = newValue;
  }

  List<FoodModel>? searchResult;
  void searchFoods(String key) async {
    setLoading = true;

    Uri url = Uri.parse('$appBaseUrl/api/foods/search/$key');

    try {
      var response = await http.get(url);

      if (response.statusCode == 200) {
        searchResult = foodModelFromJson(response.body);
        setLoading = false;
      } else {
        setLoading = false;
        var error = apiErrorFromJson(response.body);
        debugPrint(error.message);
      }
    } catch (e) {
      setLoading = false;
      debugPrint(e.toString());
    }
  }
}
