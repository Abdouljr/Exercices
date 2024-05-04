import 'package:flutter_ecommerce/constants/constant.dart';
import 'package:flutter_ecommerce/models/Food_model.dart';
import 'package:flutter_ecommerce/models/api_error.dart';
import 'package:flutter_ecommerce/models/hooks/hook_result.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:http/http.dart' as http;

FetchHook useFetchAllFoods(String code) {
  final foodsItems = useState<List<FoodModel>?>(null);
  final isLoading = useState<bool>(false);
  final error = useState<Exception?>(null);
  final apiError = useState<ApiError?>(null);

  Future<void> fetchData() async {
    isLoading.value = true;

    try {
      Uri url = Uri.parse('$appBaseUrl/api/foods/recommendation/$code');
      final response = await http.get(url);
      if (response.statusCode == 200) {
        foodsItems.value = foodModelFromJson(response.body);
      } else {
        apiError.value = apiErrorFromJson(response.body);
      }
    } catch (e) {
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
      data: foodsItems.value,
      isloading: isLoading.value,
      error: error.value,
      refetch: refresh);
}
