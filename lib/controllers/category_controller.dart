import 'package:get/get.dart';

class CategoryController extends GetxController {
  final RxString _category = ''.obs;
  final RxString _title = ''.obs;

  String get category => _category.value;
  String get title => _title.value;

  set updateCategory(String newValue) {
    _category.value = newValue;
  }

  set updateTitle(String newValue) {
    _title.value = newValue;
  }
}
