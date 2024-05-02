import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/models/api_error.dart';
import 'package:flutter_ecommerce/models/hooks/hook_result.dart';
import 'package:flutter_ecommerce/models/restaurant_model.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:http/http.dart' as http;

FetchHook useFetchCategories() {
  final categoriesItems = useState<List<CategoriesModel>?>(null);
  final isLoading = useState<bool>(false);
  final error = useState<Exception?>(null);
  final apiError = useState<ApiError?>(null);

  Future<void> fetchData() async {
    isLoading.value = true;

    try {
      Uri url = Uri.parse('$appBaseUrl/api/category/random');
      final response = await http.get(url);
      print(response.statusCode);
      if (response.statusCode == 200) {
        categoriesItems.value = categoriesModelFromJson(response.body);
      } else {
        apiError.value = apiErrorFromJson(response.body);
      }
    } catch (e) {
      print("response aaaa: ");
      print(e);
      error.value = e as Exception;
    } finally {
      isLoading.value = false;
    }
  }

  useEffect(() {
    fetchData();
    return null;
  }, []);

  void refresh() {
    isLoading.value = true;
    fetchData();
  }

  return FetchHook(
      data: categoriesItems.value,
      isloading: isLoading.value,
      error: error.value,
      refetch: refresh);
}
