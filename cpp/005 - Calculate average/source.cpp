#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

double calcAverage(const std::vector<int> &values)
{
    return accumulate(values.begin(),values.end(), 0.0) / values.size();
}

int main(int argc, char const *argv[])
{
    cout << calcAverage({2, 5}) << endl;
    cout << calcAverage({5}) << endl;
    cout << calcAverage({4, 2, 1}) << endl;
    cout << calcAverage({3, 2, 5, 1}) << endl;
    cout << calcAverage({3, 2, 3, 5, 1}) << endl;
    cout << calcAverage({3, 4, 2, 4, 5}) << endl;
    return 0;
}
