#include <vector>
#include <array>
#include <bits/stdc++.h>

using namespace std;

std::array<int, 2> two_oldest_ages(std::vector<int> ages)
{
    sort(ages.begin(), ages.end());
    return {ages.end()[-2], ages.back()};
}

int main(int argc, char const *argv[])
{
    two_oldest_ages({1, 5, 87, 45, 8, 8});
    two_oldest_ages({6, 5, 83, 5, 3, 18});
    return 0;
}