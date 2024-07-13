const a = [1, 5, 6, 9, 12, 15];
const target = 48;

// Hàm tìm các tổ hợp có tổng bằng target
function findCombinations(arr, target, index, currentCombination, allCombinations) {
  // Nếu tổng các phần tử trong tổ hợp hiện tại bằng target, thêm tổ hợp vào danh sách kết quả
  if (target === 0) {
    allCombinations.push([...currentCombination]);
    return;
  }

  // Nếu tổng lớn hơn target hoặc đã duyệt hết các phần tử trong mảng
  if (target < 0 || index === arr.length) {
    return;
  }

  // Bỏ qua phần tử hiện tại và tiếp tục với các phần tử tiếp theo
  findCombinations(arr, target, index + 1, currentCombination, allCombinations);
  
  // Thêm phần tử hiện tại vào tổ hợp và tiếp tục tìm kiếm
  currentCombination.push(arr[index]);
  findCombinations(arr, target - arr[index], index + 1, currentCombination, allCombinations);
  
  // Loại bỏ phần tử cuối cùng khỏi tổ hợp hiện tại để quay lui
  currentCombination.pop();
}

// Hàm lấy tất cả các tổ hợp có tổng bằng target
function getAllCombinations(arr, target) {
  const allCombinations = [];
  findCombinations(arr, target, 0, [], allCombinations);
  return allCombinations;
}

// Tìm các tổ hợp trong mảng a có tổng bằng target
const combinations = getAllCombinations(a, target);
console.log(combinations);

// Kiểm tra và in kết quả
if (combinations.length === 0) {
  console.log('Không có tổ hợp nào có tổng bằng 48.');
} else {
  console.log(`Có ${combinations.length} tổ hợp có tổng bằng 48:`);
  combinations.forEach((combo, index) => {
    console.log(`${index + 1}: [${combo.join(', ')}]`);
  });
}
