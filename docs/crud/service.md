#### 以角色Service举例

```php
<?php

namespace Slowlyo\SlowAdmin\Services;

use ...;

class AdminRoleService extends AdminService
{
	// 功能对应的 Model
    protected string $modelName = AdminRole::class;
	
	// 几乎所有的数据库操作都在 Service 中
	// 不满足的地方, 在此处重写即可
}
```